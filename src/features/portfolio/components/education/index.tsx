import React from "react"

import { EDUCATION } from "../../data/education"
import { ExperienceItem } from "../experiences/experience-item"
import { Panel, PanelHeader, PanelTitle } from "../panel"

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </Panel>
  )
}
