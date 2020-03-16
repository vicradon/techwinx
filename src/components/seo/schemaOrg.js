import React from "react";
import Helmet from "react-helmet";

function SchemaOrg() {
  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "Organization",
          name: "Techwinx",
          url: "https://techwinx.com/",
          logo: "https://raw.githubusercontent.com/oscafrica/osf-website/master/src/images/osf-sustain.jpg",
          description: `
          Techwinx is a blog about technology in Africa. It focusses on emerging technology and technology for social good.
          `
        })}
      </script>
    </Helmet>
  );
}

export default SchemaOrg;
