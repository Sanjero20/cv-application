import React, { Component } from 'react';
import { checkYear, checkLocation } from '../../modules/check.jsx';

class WorkDisplay extends Component {
  constructor(props) {
    super(props);
  }

  renderWork = (list) => {
    return list.map((info) => (
      <div key={info.id}>
        <div className="space-between">
          <strong className="company-name">
            {info.companyName} {checkLocation(info.location)}
          </strong>
          <p>{checkYear(info.fromYr, info.toYr)}</p>
        </div>

        <div className="indent-s">
          <strong>{info.role.toUpperCase()}</strong>
          <p>{info.roleDescription}</p>
        </div>
      </div>
    ));
  };

  render() {
    const work = this.props.data;

    if (work.length <= 0) return;

    return (
      <section className="resume-work">
        <h4>
          Work Experience <hr />
        </h4>
        <div className="work-list">{this.renderWork(work)}</div>
      </section>
    );
  }
}

export default WorkDisplay;
