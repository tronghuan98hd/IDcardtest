import React, { Component } from "react";

class Infomation extends Component {
  render() {
    return (
      <div>
        <div class="result-title">Result</div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <div className="review">
              <img src={this.props.image} className="image-review" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6">
            <table class="table table-borderless">
              <tr>
                <td>
                  <b>Name</b>
                </td>
                <td>{this.props.result.name}</td>
              </tr>
              <tr>
                <td>
                  <b>Number</b>
                </td>
                <td>{this.props.result.number}</td>
              </tr>
              <tr>
                <td>
                  <b>Birthday</b>
                </td>
                <td>{this.props.result.dateOfBirth}</td>
              </tr>
              <tr>
                <td>
                  <b>Gender</b>
                </td>
                <td>{this.props.result.sex}</td>
              </tr>
              <tr>
                <td>
                  <b>Nationality</b>
                </td>
                <td>{this.props.result.nationality}</td>
              </tr>
              <tr>
                <td>
                  <b>Hometown</b>
                </td>
                <td>{this.props.result.hometown}</td>
              </tr>
              <tr>
                <td>
                  <b>Address</b>
                </td>
                <td>{this.props.result.adress}</td>
              </tr>
              <tr>
                <td>
                  <b>Date of expiry</b>
                </td>
                <td>{this.props.result.dateOfExpiry}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Infomation;
