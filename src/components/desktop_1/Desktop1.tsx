import { Button, Flex, Text, View, Cell, Column, Heading, Row, TableView, TableBody, TableHeader } from "@adobe/react-spectrum"
import Add from "@spectrum-icons/workflow/Add"
import Delete from "@spectrum-icons/workflow/Delete"
import Edit from "@spectrum-icons/workflow/Edit"

export const airports = [
    {
        id: 1,
        name: 'Indra Gandhi International Airport',
        country: 'India',
        code: 'DEL',
        Terminal: 3
    },
    {
        id: 2,
        name: 'Dubai International Airport',
        country: 'UAE',
        code: 'DXB',
        Terminal: 5
    },
    {
        id: 3,
        name: 'Heathrow Airport',
        country: 'England',
        code: 'LHR',
        Terminal: 6
    },
    {
        id: 4,
        name: 'Istanbul Airport',
        country: 'Turkey',
        code: 'IST',
        Terminal: 3
    },
    {
        id: 5,
        name: 'Rajiv Gandhi International Airport',
        country: 'Texas',
        code: 'DFW',
        Terminal: 14
    },
]

const Desktop1 = () => {

    return (
        <>
            <View backgroundColor={'static-white'} paddingStart={20} paddingEnd={30} paddingY={20} width={'100%'}>
                <Flex direction={'column'} gap={4}>
                    <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Heading level={2}>Airports</Heading>
                        <Button variant={'accent'} staticColor="black">
                            <Add />
                            <Text>Add New</Text>
                        </Button>
                    </Flex>
                    <Flex direction={'row'} gap={3} >
                        <TableView selectionMode="multiple" width={'95%'}>
                            <TableHeader>
                                <Column>All Airports </Column>
                                <Column align="end">Country</Column>
                                <Column align="end">Code</Column>
                                <Column align="end">Terminals</Column>
                            </TableHeader>
                            <TableBody>
                                {airports?.map(eachAirport => (
                                    <Row key={eachAirport.id} href="/desktop2">
                                        <Cell>{eachAirport.name}</Cell>
                                        <Cell>{eachAirport.country}</Cell>
                                        <Cell>{eachAirport.code}</Cell>
                                        <Cell>{eachAirport.Terminal}</Cell>
                                    </Row>
                                ))}
                            </TableBody>
                        </TableView>
                        <Flex direction={'column'} marginTop={'40px'} gap={18}>
                            {airports?.map(eachAirport => (
                                <Flex direction={'row'} gap={10}>
                                    <Edit />
                                    <Delete />
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </View>
        </>
    )
}
export default Desktop1