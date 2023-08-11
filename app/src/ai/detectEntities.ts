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

  return resp.Entities;
};

export default detectEntities;
