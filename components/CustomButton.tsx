import { Button } from '@chakra-ui/react';
import { MdBuild } from "react-icons/md";

interface CustomButtonProps {
    value: string;
}
  

export default async function CustomButton(props: CustomButtonProps){
    
    return (
        <>
        <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'> 
            {props.value}
        </Button>
        </>
    )
}
