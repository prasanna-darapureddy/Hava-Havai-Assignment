import { Image, Flex, View, Heading, Divider } from "@adobe/react-spectrum"
import { headerAvatar } from "../assets"



const AppBar = () => {
    return (
        <>
            <View backgroundColor={'static-white'} paddingX={15} >
                <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Heading level={2}>hava havai</Heading>
                    <Image src={headerAvatar} alt="Avatar" />
                </Flex>
            </View>
            <Divider size="S" />
        </>
    )
}
export default AppBar