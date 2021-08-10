import { useState } from 'react';

import { handleError } from '../client/ErrorHandling/handleError';
import styles from './getupdates.module.css'

export default function SendMail({ data }) {

    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState('');
    const [ success, setSuccess] = useState('');

    const submitEmailUpdates = async (event) => {
        event.preventDefault();
        const recipeUrl = '/api/storemail';
        const postBody = { email };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };
        
        const response = await fetch(recipeUrl, requestMetadata);
        try {
            const res = await response.json();
            if (!response.ok) {
                throw new Error(res.message);
            }
            setSuccess(res.message);
            setError(null);
        }catch(err){
            console.log(err);
            setSuccess(null);
            setError(err.message);
        }

    }
    
    return (<main>
        <h1 className={styles.title}>Get live tracking to your email every 30 min</h1>
        <p className={ error && styles.error}>{error}</p>
        <p className={success && styles.success}>{success}</p>
        <form className={styles.sendEmailForm} onSubmit={(e) => submitEmailUpdates(e)}>
            <label htmlFor="email">Enter Email - </label>
            <input onChange={(e) => setEmail(e.target.value)} 
                value={email}
                id="email" 
                type="email" 
                placeholder="someone@someone.com"/>
            <button disabled={email==''}>Submit</button>
        </form>
    </main>);
}