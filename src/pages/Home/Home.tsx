import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Text } from '@radix-ui/themes'
import ClientTabDashboard from '../../componentsForHome/ClientTabDashboard/ClientTabDashboard'
import CreatorTabDashboard from '../../componentsForHome/CreatorTabDashboard/CreatorTabDashboard'
export default function Home() {



  return(
    <>
      <Text size='8'> Dashboard </Text>
      <Tabs.Root defaultValue="client">
        <Tabs.List aria-label="Tabs">
          {/* TODO: Add logic to hide tabs when the user doesn't have any relevant tasks */}
          <Tabs.Trigger value="client">Client</Tabs.Trigger>
          <Tabs.Trigger value="creator">Creator</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="client"><ClientTabDashboard/></Tabs.Content>
        <Tabs.Content value="creator"><CreatorTabDashboard/></Tabs.Content>
      </Tabs.Root>
    </>
  )
}
