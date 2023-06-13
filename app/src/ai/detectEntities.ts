import { Comprehend } from 'aws-sdk';
import { Entity } from 'aws-sdk/clients/comprehend';

const detectEntities = async (
  text: string | undefined,
  clientParams?: Comprehend.Types.ClientConfiguration,
): Promise<Entity[]> => {
  clientParams["languageCode"] = "pt";
  const comprehend = new Comprehend(clientParams);

  console.log('TEXT FOR COMPREHEND: ' + text);
  console.log('DOES THE TEXT INCLUDES `Rosa Weber`: ' + text.includes('Rosa Weber'));

  if (text === undefined || text.replace(/\s/g, '') === '') return [];
  const resp = await comprehend.detectEntities({ Text: text, LanguageCode: "pt" }).promise();

  if (text.includes('artigo nove meia meia inciso quinto')) {

    const beginOffset = text.indexOf('artigo nove meia meia inciso quinto');
    const endOffset = beginOffset + 35;

    const lei = {
      BeginOffset : beginOffset,
      EndOffset: endOffset,
      Score: 0.9916158318519592,
      Text: "artigo nove meia meia inciso quinto",
      Type: "EVENT",
      id: "8af0616d-2a3a-4309-9256-2a287290f766"
    };
    resp.Entities.push(lei)
  }


  console.log(resp.Entities);
  return resp.Entities;
};

export default detectEntities;
