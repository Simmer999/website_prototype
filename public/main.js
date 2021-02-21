const update = document.querySelector('#update-button')


//===========================================================
update.addEventListener('click', _ => {
    fetch('/entries', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Sim',
            quote: 'Peace. Love. Dope.'
        })
    })
        .then(res => {
            if (res.ok) return res.json()    
        }) 
        .then(response => {
            window.location.reload(true)
            console.log(response)
        })
})
//=============================================================


deleteButton = document.querySelector('#delete-button')
messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
    fetch('/entries', { //This does not seem to need to be the targeted collection. 
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Sim'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        if (response === 'No quote to delete.') {
            messageDiv.textContent = 'No Simmer quote to delete.'
        } else {
            window.location.reload(true)
        }
    })
})



