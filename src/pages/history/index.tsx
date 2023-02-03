import {HistoryContainer, HistoryList, Status} from "./style";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>
                <Status statusColor="green"> concluido </Status>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>200 minutos</td>
              <td>10:00</td>
              <td>
                <Status statusColor="green"> concluido </Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
