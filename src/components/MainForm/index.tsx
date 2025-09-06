import { PlayCircle } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
  return (
    <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Tarefa"
              id="meuInput"
              type="text"
              placeholder="Nome da Tarefa"
            />
          </div>

          <div className="formRow">
            <p>
              Nesse ciclo <b>descanse</b> por <b>5 min.</b>
            </p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            {/* Componente do React Sem Children */}
            <DefaultButton icon={<PlayCircle />} />
            {/* <DefaultButton icon={<StopCircleIcon/>} color='red' /> */}
          </div>
        </form>
  );
}
