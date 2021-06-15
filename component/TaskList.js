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

import { QuestionIcon } from "@chakra-ui/icon"
import TaskListItem from "./TaskListItem";


const TaskList = (props) => {
    const { taskList, handleCompleted } = props;


    return <Accordion allowToggle>
        {taskList.map((task) => {
            return <TaskListItem key={task.name} task={task}/>
        })}
    </Accordion>

}

export default TaskList