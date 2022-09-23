import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Experience, pageInfo } from '../../typings';


const query=groq`
 *[_type=="pageInfo"]

`
type Data={
  pageInfo:pageInfo[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo:pageInfo[]=await sanityClient.fetch(query);
  res.status(200).json({pageInfo})
}
