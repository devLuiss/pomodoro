import {Play} from "phosphor-react";
import {set, useForm} from "react-hook-form";
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

interface FormData {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycle] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const {register, handleSubmit, watch, reset} = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewTask(data: FormData) {
    const newCycle = {
      id: new Date().getTime().toString(),
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles((state) => [...state, newCycle]);

    setActiveCycle(newCycle.id);

    reset();
  }

  const activeCycle = cycles.find((cycles) => cycles.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutesAmountFormatted = String(minutesAmount).padStart(2, "0");
  const secondsAmountFormatted = String(secondsAmount).padStart(2, "0");

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
          <span>{minutesAmountFormatted[0]}</span>
          <span>{minutesAmountFormatted[1]}</span>
          <Separator>:</Separator>
          <span>{secondsAmountFormatted[0]}</span>
          <span>{secondsAmountFormatted[1]}</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Iniciar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
