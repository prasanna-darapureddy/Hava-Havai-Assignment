import { View, Flex, Heading, Divider, ListBox, Item, Section, Text, Content } from "@adobe/react-spectrum"
import Home from '@spectrum-icons/workflow/Home';
import Apps from '@spectrum-icons/workflow/Apps';


const Sidebar = () => {

    return (
        <>
            <View backgroundColor={'static-white'} padding={15}>
                <ListBox width="size-2400" aria-label="Alignment">
                    <Item>
                        <Home />
                        <Text>Home</Text>
                    </Item>
                    <Item>
                        <Apps />
                        <Text>Dashboard</Text>
                    </Item>
                    <Section title="Services">
                        <Item href={'/'}>Airports</Item>
                        <Item>Videos</Item>
                    </Section>
                    <Section title="Others">
                        <Item>List 1</Item>
                        <Item>List 2</Item>
                        <Item>List 3</Item>
                    </Section>
                </ListBox>
            </View>
            <Divider size="S" orientation="vertical" />
        </>
    )
}
export default Sidebar