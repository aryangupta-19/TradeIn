import React from "react";

function LeftSection({
  imgUrl,
  prodName,
  prodDesc,
  tryDemo,
  learnMore,
  baseTag,
  Tag,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-6 mt-5">
          <img src={imgUrl}></img>
        </div>

        <div className="col-6 p-5 mt-5" >

            <h2>{prodName}</h2>
            <p>{prodDesc}</p>

            <div className="mb-5" style={{display: (tryDemo && learnMore)? "visible": "none"}}>
                <a href={tryDemo} style={{textDecoration: "none"}} >Trey Demo <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i>  </a>
                <a href={learnMore} style={{marginLeft: "50px"}}>Learn More <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i>  </a>
            </div>

            <div className="mb-5" style={{display: (baseTag && Tag)? "visible": "none"}}>
                <a href={baseTag} style={{textDecoration: "none"}}>{Tag} <i class="fa fa-arrow-right " aria-hidden="true" style={{textDecoration: "none"}}></i>  </a>
            </div>

            <div>
                <a href={googlePlay}>
                    <img src="./media/googlePlayBadge.svg"></img>
                </a>
                <a href={appStore} style={{marginLeft: "50px"}}>
                    <img src="./media/appstoreBadge.svg"></img>
                </a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
