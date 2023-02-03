import {Play} from "phosphor-react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Task is required"),
  minutesAmount: zod
    .number()
    .min(5, "Minimum time is 5 minutes")
    .max(100, "Maximum time is 100 minutes"),
});

export function Home() {
  const {register, handleSubmit, watch, } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  function handleCreateNewTask(data: any) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="De um nome para seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="banana 4" />
          </datalist>

          <label htmlFor="minutesAmount">Durante </label>
          <MinutesAmountInput
            placeholder="00"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={100}
            {...register("minutesAmount", {valueAsNumber: true})}
          />

          <span>Minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>o</span>
          <span>o</span>
          <Separator>:</Separator>
          <span>o</span>
          <span>o</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Iniciar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
