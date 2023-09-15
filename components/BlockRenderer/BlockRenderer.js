import { Cover } from "../Cover";

export const BlockRenderer = ({blocks}) => {
  return (
    <div>
        {blocks.map((block) => {
           switch (block.name) {
                case 'core/cover': {
                    return <Cover key={block.id} background={block.attributes.url}> 
                    Core Cover 
                    </Cover>;
        }
            default: 
                return null;
        }
        })}
    </div>
    )
}

