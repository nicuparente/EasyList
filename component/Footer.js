import {
    Flex,
    Heading,
    Button,
    Center,
    Container
} from "@chakra-ui/react"


const Footer = (props) => {
    return <Center minHeight="300px">
        <Flex minHeight="300px" minWidth="720px" flexDirection="column" justifyContent="space-around">
            <Flex justifyContent="space-around">
                <Flex justifyContent="space-between" height="125px" marginTop="10px" alignItems="center" flexDir="column">
                    <Heading size="md">Company</Heading>
                    <Button size="sm" variant="link">About Us</Button>
                    <Button size="sm" variant="link">Blog</Button>
                    <Button size="sm" variant="link">Careers</Button>
                </Flex>
                <Flex justifyContent="space-between" height="125px" marginTop="10px" alignItems="center" flexDir="column">
                    <Heading size="md">Product</Heading>
                    <Button size="sm" variant="link">Overview</Button>
                    <Button size="sm" variant="link">List Home</Button>
                    <Button size="sm" variant="link">Support</Button>
                </Flex>
                <Flex justifyContent="space-between" height="125px" marginTop="10px" alignItems="center" flexDir="column">
                    <Heading size="md">Legal</Heading>
                    <Button size="sm" variant="link">Cookie Policy</Button>
                    <Button size="sm" variant="link">Privacy Policy</Button>
                    <Button size="sm" variant="link">Terms of Service</Button>
                </Flex>

            </Flex>
            <Center>
                <Heading size="sm">Powered by 🍺 | © 2021</Heading>
            </Center>
        </Flex>

    </Center>
}

export default Footer;