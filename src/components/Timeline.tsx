import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Timeline as ManTimeline, Text, Title, /*Group,*/ ScrollArea } from '@mantine/core';
import {
  PlasmicTimeline,
  DefaultTimelineProps
} from "./plasmic/acc_tez_wizard/PlasmicTimeline";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Recipes from './lessons.json';

export interface TimelineProps extends DefaultTimelineProps {}

function Timeline_(props: TimelineProps, ref: HTMLElementRefOf<"div">) {
  const lessonState = useSelector((state: any) => state.WizardState);
  const viewport = useRef<HTMLDivElement>(null);

  const scrollTo = (top: number) => {
    if (viewport.current) {
      viewport.current.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    lessonState.timeline >= 4 && scrollTo(lessonState.timeline * 70);
  }, [lessonState.timeline])

  const timelineView = () => (
    <ScrollArea className="project-view" scrollbarSize={0} viewportRef={viewport}>
      {/* <Title align="center" order={3}>
        Recipes
      </Title>
      <Group position="center" spacing={5} style={{ padding: 5 }}>
        <Text className="fundrasier" size="lg">Fundrasier Contract</Text>
        <Text size="md">
          This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.{' '}
        </Text>
      </Group> */}
      <Title order={5} style={{ padding: 10, marginBottom: 10 }}>
        Timeline component
      </Title>
      <ManTimeline active={lessonState.timeline}>
        {Recipes.map((item, index) => (
          <ManTimeline.Item key={index} title={item.text}>
            <Text color="dimmed" size="sm">{item.hint}</Text>
          </ManTimeline.Item>
        ))}
      </ManTimeline>
    </ScrollArea>
  );

  return (
    <PlasmicTimeline root={{ ref }} {...props} timeline={timelineView()} />
  );
}

const Timeline = React.forwardRef(Timeline_);
export default Timeline;
