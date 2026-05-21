import React from 'react';

function RightSection({imgUrl, prodName, prodDesc, baseTag, Tag}) {
    return (
        <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col px-5">
            <h2 className="mb-3">{prodName}</h2>
            <p className="text-muted mb-4">{prodDesc}</p>
            <a href={baseTag} className="text-primary fw-semibold" style={{textDecoration: "none"}}>
              {Tag}
              <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i> 
            </a>
          </div>
      
          {/* Right Image */}
          <div className="col text-center">
            <img 
              src={imgUrl} 
              alt="product"
              className="img-fluid"
            />
          </div>
      
        </div>
      </div>
    );
}

export default RightSection;