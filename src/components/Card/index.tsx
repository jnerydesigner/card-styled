import ImgMario from "../../assets/mario.png";
import {
  ActionsButton,
  CardContainer,
  Container,
  ContentInformation,
  DataDetails,
  DetailsInformation,
  ImgBox,
  Lines,
  TextDataDetails,
  TextDetails,
} from "./styles";

export function Card() {
  return (
    <Container>
      <CardContainer>
        <Lines></Lines>
        <ImgBox>
          <img src={ImgMario} alt="Super Mario" />
        </ImgBox>

        <ContentInformation>
          <DetailsInformation>
            <TextDetails>
              <h2>Super Mário</h2>
              <span>Senior Plumber</span>
            </TextDetails>
            <DataDetails>
              <TextDataDetails>
                <h3>350</h3>
                <span>Posts</span>
              </TextDataDetails>
              <TextDataDetails>
                <h3>150</h3>
                <span>Followers</span>
              </TextDataDetails>
              <TextDataDetails>
                <h3>350</h3>
                <span>Following</span>
              </TextDataDetails>
            </DataDetails>
            <ActionsButton>
              <button>Follow</button>
              <button>Message</button>
            </ActionsButton>
          </DetailsInformation>
        </ContentInformation>
      </CardContainer>
    </Container>
  );
}
