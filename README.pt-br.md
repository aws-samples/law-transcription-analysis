
## Law Transcription Analysis
[![en](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/dmtr33/law-transcription-demo/blob/main/README.pt-br.md)

O Law Transcription Analysis (LTA) é uma solução simples que aproveita os poderes do Amazon Transcribe e do Amazon Comprehend para fornecer transcrição e compreensão de leis. A solução abre um WebSocket entre o cliente (navegador) e o Amazon Transcribe. Esse WebSocket é usado para enviar o áudio do cliente para o Amazon Transcribe e recuperar a transcrição em tempo real, que é então renderizada na interface do usuário. Os resultados da transcrição são enviados ao Amazon Comprehend, que retorna uma análise da transcrição.

Para executar a solução, clone/baixe o projeto. Para implementar a solução, siga as etapas abaixo:

### Implantação
As instruções abaixo abrangem a instalação em sistemas operacionais baseados em Unix, como macOS e Linux. 
Você pode usar um ambiente do AWS Cloud9 ou uma instância do EC2 (recomendado: t3.large ou superior na plataforma Amazon Linux) para implementar a solução

#### Requisitos
* yarn (você pode instalar o yarn seguindo as instruções [aqui](https://classic.yarnpkg.com/en/docs/install/))
* node 10+ (Você pode instalar o nodejs seguindo as instruções [aqui](https://nodejs.org/en/download/))
* aws cli (Você pode instalar o aws cli seguindo as instruções [aqui](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html))
* tsc (npm install typescript)
* Navegador da Web Google Chrome


Caso ainda não o tenha feito, configure o aws cli para interagir com os serviços do AWS usando o ```aws configure ```.
Para implantar usando essa abordagem, você deve primeiro definir alguns valores dentro do arquivo package.json na pasta do aplicativo.

* Defina sua região de implantação do AWS na propriedade stack->region, substituindo "%%REGION%%". 

 **Nota** O LTA é compatível com as regiões do AWS em que o Amazon Transcribe e o Amazon Comprehend estão disponíveis. Para obter mais informações, consulte a [AWS Region Table] (https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/)
* Digite seu e-mail na propriedade de e-mail, substituindo "%%USER_EMAIL%%"


Agora, mude para o diretório do aplicativo e use o yarn para implantar a solução:
```
cd ./app
```
```
yarn && yarn deploy
```
#### Observação:

Essa implementação cria 2 buckets S3 que terão de ser excluídos manualmente quando a pilha for destruída. (O Cloudformation não os exclui, para evitar a perda de dados).
* 1 para o bucket do cliente
* 1 para o kit de ferramentas CDK (se esta for sua primeira vez usando o CDK)

### Comandos de implantação

* ```yarn deploy:backend```: implementa o aplicativo de backend
* ```yarn deploy:client```: implementa ou atualiza o aplicativo Web cliente
* ```yarn build-app```: cria o aplicativo react    
* ```yarn start```: permite o desenvolvimento do aplicativo Web localmente
* ```yarn destroy```: destrói o backend e as pilhas do cliente


### Medical Transcription Analysis Demo
Essa solução foi criada com base em componentes do [medical-transcription-analysis](https://github.com/aws-samples/medical-transcription-analysis)
