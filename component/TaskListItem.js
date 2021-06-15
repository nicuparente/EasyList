import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button,
    Text,
    Badge,
    Flex,
    Spacer,
    Divider
} from "@chakra-ui/react"

import {useState} from 'react'


const TaskListItem = (props) => {

    const {task} = props
    const [isCompleted, setIsCompleted] = useState(task.status)
    
    const handleCompleted = ()=>{
        setIsCompleted("Completed");
    }

    return <AccordionItem>
        <h2>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    <Text>
                        {task.name}

                        {isCompleted == "Completed" ? <Badge marginLeft="10px" colorScheme="green">Completed</Badge> : ""}
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel marginY="10px" backgroundColor="gray.700" borderRadius="5px" pb={4}>
            <Text>
                {task.content}
            </Text>
            <Divider marginY="15px" />
            <Flex >
                <Button size="sm" variant="outline">
                    Help ❔
                </Button>
                <Spacer />
                <Button size="sm" onClick={handleCompleted} colorScheme="green">
                    Mark as Completed
                </Button>
            </Flex>

        </AccordionPanel>
    </AccordionItem>
}

export default TaskListItem;