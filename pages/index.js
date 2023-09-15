import { gql } from "@apollo/client";
import client from "../client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";


export default function Home(props) {
  console.log( "props", props);
  return (
    <main
      className=""
    >
      <div className="">
        <BlockRenderer blocks={props.blocks} />
       Studio G 2023
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const {data} = await client.query({

    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
    `,
  });
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
}
