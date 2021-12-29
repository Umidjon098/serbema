import React from "react";
import { Steps, Divider } from "antd";
import ScheduleDate from "./component/ScheduleDate";
import SectionTitle from "../../../../components/SectionTitle";
const { Step } = Steps;

function Schedule() {
  return (
    <div className="schedule">
      <SectionTitle id="schedule" title="THE SCHEDULE" />
      <div className="schedule-box">
        <div>
          <ScheduleDate />
          <div className="step-custom-style">
            <Steps
              className="right-step-column"
              progressDot
              current={10}
              direction="vertical"
            >
              <Step title="Welcome Tea Registration" description="" />
              <Step title="9:15 AM " description="9:15 AM" />
              <Step title="Keynote Speeches" description="" />
              <Step title="11:30 AM " description="10.09.2021" />
              <Step title="Early Bird Registration  Payment" description="" />
              <Step title="02:30 PM " description="01.08.2021-25.08.2021" />
              <Step title="15.08.2021 " description="01.08.2021-25.08.2021" />
              <Step title="Conference Dates" description="" />
            </Steps>
            <Steps progressDot current={10} direction="vertical">
              <Step
                title="8:30 AM"
                description="05.09.2021 (final call for papers)"
              />
              <Step title="Review Results" description="" />
              <Step title="10:00 AM" description="25.08.2021 (final)." />
              <Step title="Notification of Acceptance" description="" />
              <Step title="01:30 PM" description=" 01:30 PM" />
              <Step title="Late Registration  Payment" description="" />
              <Step title="Late Registration  Payment" description="" />
              <Step title="14.10.2021 - 16.10.2021" description="" />
            </Steps>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
