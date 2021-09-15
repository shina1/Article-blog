import React from 'react'
import { Form, Input, Button } from 'antd';
// import axios from 'axios'





const CustomForm = () => {
    const handleFormSubmit =(e)=>{
        e.preventDefault()
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const content = e.target.elements.content.value; 
        console.log(title,description);  
    }
    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <Form.Item label='Title'>
                    <Input name='title' placeholder='Enter title' />
                </Form.Item>
                <Form.Item label='Description'>
                    <Input name='description' placeholder='Enter title' />
                </Form.Item>
                <Form.Item label='Content'>
                    <Input.TextArea name='content' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CustomForm












