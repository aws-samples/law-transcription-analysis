import { Comprehend } from 'aws-sdk';
import { Entity } from 'aws-sdk/clients/comprehend';

const detectEntities = async (
  text: string | undefined,
  clientParams?: Comprehend.Types.ClientConfiguration,
): Promise<Entity[]> => {
  clientParams["languageCode"] = "pt";
  const comprehend = new Comprehend(clientParams);

  if (text === undefined || text.replace(/\s/g, '') === '') return [];
  const resp = await comprehend.detectEntities({ Text: text, LanguageCode: "pt" }).promise();
  console.log(resp.Entities);
  return resp.Entities;
};

export default detectEntities;
