import { Breadcrumbs, Flex, Item, TabPanels, View, Heading, TabList, Tabs, Text, Image, Button, Divider, Switch, TextField, Grid, Picker } from "@adobe/react-spectrum"
import MoreSmallList from "@spectrum-icons/workflow/MoreSmallList"
import { people } from "../assets"
import { styles } from "./Desktop2Styles"
import Add from "@spectrum-icons/workflow/Add"
import { FileTrigger } from "react-aria-components"

const Desktop2 = () => {
    return (
        <>
            <View backgroundColor={'static-white'} paddingStart={20} paddingEnd={30} paddingY={20} width={'100%'}>
                <Flex direction={'column'}>
                    <Breadcrumbs>
                        <Item href="/">Airports</Item>
                        <Item>Indra Gandhi International Airport</Item>
                    </Breadcrumbs>

                    <Heading level={2}>Indra Gandhi International Airport</Heading>

                    <Tabs aria-label="History of Ancient Rome">
                        <TabList>
                            <Item key="FoR">Terminals</Item>
                            <Item key="MaR">Transport</Item>
                            <Item key="Emp">Contact Details</Item>
                        </TabList>
                        <TabPanels marginTop={30}>
                            <Item key="FoR">
                                <Flex direction={'row'} alignItems={'center'} gap={10}>
                                    <Flex direction={'row'} gap={3} UNSAFE_style={styles.card}>
                                        <Image src={people} width={'100%'} />
                                        <Flex direction={'column'} UNSAFE_style={styles.contentCard}>
                                            <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <Heading>Terminal1</Heading>
                                                <MoreSmallList />
                                            </Flex>
                                            <Text>Optional metadata should be two lines.</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex direction={'row'} gap={3} UNSAFE_style={styles.card}>
                                        <Image src={people} width={'100%'} />
                                        <Flex direction={'column'} UNSAFE_style={styles.contentCard}>
                                            <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                                <Heading>Terminal2</Heading>
                                                <MoreSmallList />
                                            </Flex>
                                            <Text>Optional metadata should be two lines.</Text>
                                        </Flex>
                                    </Flex>
                                    <Button variant={'primary'} staticColor="black">
                                        <Add />
                                        <Text>Add Terminal</Text>
                                    </Button>
                                </Flex>
                                <Heading level={2}>Services</Heading>

                                <Text>Lost & found</Text>
                                <Divider size="M" />
                                <Grid UNSAFE_style={styles.inputsBox}>
                                    <Flex direction={'row'} gap={30} alignItems={'end'}>
                                        <TextField label="Service Name" value={'Lost & found'} />
                                        <Picker label="Category">
                                            <Item key="rarely">Option 1</Item>
                                            <Item key="sometimes">Option 2</Item>
                                            <Item key="always">Option 3</Item>
                                        </Picker>
                                        <Picker label="Sub Category">
                                            <Item key="rarely">Option 1</Item>
                                            <Item key="sometimes">Option 2</Item>
                                            <Item key="always">Option 3</Item>
                                        </Picker>
                                        <FileTrigger                                        >
                                            <Button variant="primary">Upload Image</Button>
                                        </FileTrigger>
                                        <Switch>Show image</Switch>
                                        <TextField label="Description" value={'type here'} />
                                    </Flex>
                                </Grid>
                                <Flex direction={'column'} gap={20}>
                                    <Flex direction={'column'} gap={10}>
                                        <Text>Lounge</Text>
                                        <Divider size="M" />
                                    </Flex>
                                    <Flex direction={'column'} gap={10}>
                                        <Text>Money Exchange</Text>
                                        <Divider size="M" />
                                    </Flex>
                                </Flex>
                            </Item>
                            <Item key="MaR">
                                Transport
                            </Item>
                            <Item key="Emp">
                                Contact Details
                            </Item>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </View>
        </>
    )
}
export default Desktop2