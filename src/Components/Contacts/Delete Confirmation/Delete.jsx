import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react'

function Delete() {
    const { contactId } = useParams();
    
  return (
    <div>Delete</div>
  )
}

export default Delete