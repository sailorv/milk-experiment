import React from "react"

import { useTaxonomy } from "../../hooks/useTaxonomy"

const TaxonomyCloud = () => {
  const taxonomy = useTaxonomy()

  return (
    <>
      {/* <div className="categories cut-corner">
                <h3 style={{ marginBottom: `0`, }}>Categories</h3>
                {new Array(3).fill("").map((element, i) => (
                    <Link to={ taxonomy.wpgraphql.categories.edges[`${i}`].node.uri }>
                        { taxonomy.wpgraphql.categories.edges[`${i}`].node.name }
                    </Link>
                ))}  
            </div> */}
      <div className="tag-cloud cut-corner">
        <h3 style={{ marginBottom: `0` }}>Tags</h3>
        {new Array(7).fill("").map((element, i) => (
          <a key={taxonomy.wpgraphql.tags.edges[`${i}`].node.name}>
            {taxonomy.wpgraphql.tags.edges[`${i}`].node.name}
          </a>
        ))}
      </div>
    </>
  )
}

export default TaxonomyCloud
