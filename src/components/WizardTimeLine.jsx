import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Timeline, Text, Title, Group, ScrollArea } from '@mantine/core';
import { useRef } from 'react';
import Recipes from './lessons.json';

const WizardTimeLine = () => {
  const lessonState = useSelector((state) => state.WizardState);
  const viewport = useRef();

  const scrollTo = (top) => {
    viewport.current.scrollTo({ top: top, behavior: 'smooth' });
  }

  useEffect(() => {
    lessonState.timeline >= 4 && scrollTo(lessonState.timeline * 70);
  }, [lessonState.timeline])

  return (
    <ScrollArea className="project-view" scrollbarSize={0} viewportRef={viewport}>
      <Title align="center" order={3}>
        Recipes
      </Title>
      <Group position="center" spacing={5} style={{ padding: 5 }}>
        <Text className="fundrasier" size="lg">Fundrasier Contract</Text>
        <Text size="md">
          This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.{' '}
        </Text>
      </Group>
      <Title order={5} style={{ padding: 10 }}>
        Timeline component
      </Title>
      <Timeline active={lessonState.timeline}>
        {Recipes.map((item, index) => (
          <Timeline.Item key={index} title={item.text}>
            <Text color="dimmed" size="sm">{item.hint}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </ScrollArea>
  )
}

export default WizardTimeLine;