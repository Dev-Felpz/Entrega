import { DS_Button } from "../../DS/components/Button";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <DS_Button state="default">
        Entrar
      </DS_Button>
      <DS_Button state="outline" >
        Eu ainda não tenho conta
      </DS_Button>

    </Container>

    
  );
}
