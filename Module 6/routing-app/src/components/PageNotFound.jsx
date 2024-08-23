import React from 'react'
import { Container,Row } from 'react-bootstrap'

export default function PageNotFound() {
  return (
    <div>
      <Container className='mt-5 w-75 shadow p-5'>
        <Row>
            <div className='col-md-5'>
                <img src="https://www.bing.com/th/id/OGC.b87d15757dbdadd92afedc58d8e63371?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1129101%2fscreenshots%2f3513987%2f404.gif&ehk=VC2JmqtZT%2f%2fA%2fKIUkDFihqsnMcKwX5wIhqidFgL3%2fJM%3d" alt="" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h1 className='mt-5 ms-5'>404 Error Found</h1>
                <h2 className='mt-5 ms-5'>Check url </h2>
            </div>
        </Row>
      </Container>
    </div>
  )
}
