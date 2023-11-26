import Profile from "@/pages/dashboard/admin/profile";
import React, { useRef, useState } from "react";

const LeftProfile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob((blob) => {
          const file = new File([blob], imgname, {
            type: "image/png",
            lastModified: Date.now(),
          });
          console.log(file);
        });
      };
    };

    const handleUploadButtonClick = (file) => {
      var myHeaders = new Headers();
      const token = "allafsljkfhskcshfsflskgsdghsfd";
      myHeaders.append("Authorization", `Bearer ${token}`);
      var formdata = new FormData();
      formdata.append("file", file);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
    };

    fetch("http:trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="image-upload-container">
        <div className="box-decoration">
          <label htmlFor="image-upload-input" className="image-upload-label">
            {image ? image.name : "Choose an image"}
          </label>
          <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
            ) : (
              <img
                src="https://th.bing.com/th?id=OIP.j1rpn-KTUmqcVBQygXuOuQHaIk&w=232&h=268&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt=""
              />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          <button className="image-upload-button">upload</button>
        </div>
      </div>
    </>
  );
};

export default LeftProfile;
