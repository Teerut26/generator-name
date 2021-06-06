import React, { useState } from "react";
import Form from "./Form";

export default function Card() {
  const [BaseUrl, setBaseUrl] = useState(
    "https://api-vue-sv1.herokuapp.com/generator/name/physics"
  );

  const [Image1, setImage1] = useState(null);
  const [Image2, setImage2] = useState(null);
  const [Loading1, setLoading1] = useState(false);
  const [Loading2, setLoading2] = useState(false);


  const toDataUrl = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
  //   xhr.onreadystatechange=function(e){
  //     if(xhr.readyState==4&&xhr.status==200){
  //         console.log("OK");
  //     }
  // };
    xhr.send();
  };

  const callToDataUrl1 = (imagepath) => {
    setLoading1(true)
    toDataUrl(imagepath, function (myBase64) {
        setImage1(myBase64)
        setLoading1(false)
    });
  };

  const callToDataUrl2 = (imagepath) => {
    setLoading2(true)
    toDataUrl(imagepath, function (myBase64) {
        setImage2(myBase64)
        setLoading2(false)
    });
  };

  const run = (data) => {
    console.log(data)
    callToDataUrl1(`${BaseUrl}?mr=${data.MR}&fname=${data.Fname}&lname=${data.Lname}&room=${data.Room}&number=${data.Number}&codeSubject=${data.CodeSubject}&typeNote=สมุดจด`)
    callToDataUrl2(`${BaseUrl}?mr=${data.MR}&fname=${data.Fname}&lname=${data.Lname}&room=${data.Room}&number=${data.Number}&codeSubject=${data.CodeSubject}&typeNote=สมุดแบบฝึกหัด`)
  }

  return (
    <div>
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">Generator Name</h5>
          <hr />
          <Form Data={(v)=>run(v)} Loading1={Loading1} Loading2={Loading2} />
          <hr />
          {/* <button
            onClick={() =>
              callToDataUrl1(
                `${BaseUrl}?mr=นาย&fname=ธีรุฒ&lname=ศรีทองดี&room=3&number=3&codeSubject=ว30204&typeNote=สมุดจด`
              )
            }
          >
            Generator
          </button> */}
          {Image1 !== null ? (
            <img
              className="w-100 border border-secondary mb-3"
              src={Image1}
            ></img>
          ) : (
            ""
          )}
           {Image2 !== null ? (
            <img
              className="w-100 border border-secondary"
              src={Image2}
            ></img>
          ) : (
            ""
          )}
          {/* <img
            className="w-100 border border-secondary mb-3"
            src={`${BaseUrl}?mr=นาย&fname=ธีรุฒ&lname=ศรีทองดี&room=3&number=3&codeSubject=ว30204&typeNote=สมุดจด`}
          ></img>
          <img
            className="w-100 border border-secondary"
            src={`${BaseUrl}?mr=นาย&fname=ธีรุฒ&lname=ศรีทองดี&room=3&number=3&codeSubject=ว30204&typeNote=สมุดแบบฝึกหัด`}
          ></img> */}
          {/* <div className="generator-warp">
              <img className="logo" src="/visut.svg"></img>
            <div className="generator"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
