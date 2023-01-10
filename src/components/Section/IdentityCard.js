import React, { Component } from "react";
import axios from "axios";

class IdentityCard extends Component {
  constructor() {
    super();
    this.state = {
      linkImg: "image/no-img-1.png",
      image: null,
      type: "CCCD",
      result: {
        number: "Number",
        name: "Name",
        dateOfBirth: "Date of bird",
        sex: "Male or Female",
        nationality: "Nationality",
        hometown: "Hometown",
        adress: "Address",
        dateOfExpiry: "Date of Expiry",
      },
    };
    this.handleImageChangeAndSumit = this.handleImageChangeAndSumit.bind(this);
  }

  handleImageChangeAndSumit = (e) => {
    var file = e.target.files[0];
    this.setState({ image: file, linkImg: URL.createObjectURL(file) });
    let form_data = new FormData();
    form_data.append("image", file);
    form_data.append("type", this.state.type);
    let url = "http://10.0.30.22:4404/api/ocr/id";
    axios
      .post(url, form_data)
      .then((res) => {
        this.setState({ result: res.data.result });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={this.handleImageChangeAndSumit}
          />
          <label className="custom-file-label" htmlFor="customFile">
            Upload ID image
          </label>
        </div>
        <div class="result-title">Result</div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="review">
              <img src={this.state.linkImg} className="image-review" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6">
            <table class="table table-borderless">
              <tr>
                <td>
                  <b>Name</b>
                </td>
                <td>{this.state.result.name}</td>
              </tr>
              <tr>
                <td>
                  <b>Number</b>
                </td>
                <td>{this.state.result.number}</td>
              </tr>
              <tr>
                <td>
                  <b>Birthday</b>
                </td>
                <td>{this.state.result.dateOfBirth}</td>
              </tr>
              <tr>
                <td>
                  <b>Gender</b>
                </td>
                <td>{this.state.result.sex}</td>
              </tr>
              <tr>
                <td>
                  <b>Nationality</b>
                </td>
                <td>{this.state.result.nationality}</td>
              </tr>
              <tr>
                <td>
                  <b>Hometown</b>
                </td>
                <td>{this.state.result.hometown}</td>
              </tr>
              <tr>
                <td>
                  <b>Address</b>
                </td>
                <td>{this.state.result.adress}</td>
              </tr>
              <tr>
                <td>
                  <b>Date of expiry</b>
                </td>
                <td>{this.state.result.dateOfExpiry}</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <button className="btn btn-success">Lưu dữ liệu</button>
        </div>
      </div>
    );
  }
}
export default IdentityCard;
