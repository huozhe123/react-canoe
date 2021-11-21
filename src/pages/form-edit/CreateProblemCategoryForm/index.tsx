import React from 'react'
import { Form, Input } from 'antd';
import './index.css'

export default function index() {
    return (
        <div className="form-container">
            <h2>新建问题分组</h2>
            <Form>
                <Form.Item name="problemName">
                    <Input/>
                </Form.Item>
            </Form>
        </div>
    )
}
