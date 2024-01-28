const q = (Q) => document.querySelector(Q), lc = q('.list').children,chore = (txt, auth, date)=> q('.list').innerHTML+=`<article><p>${txt}</p>
<span class="material-symbols-outlined"><p class='time'>${new Date().toISOString().split('T')[0]}</p><p class='auth'>${auth}</p>
<b onclick="edit(this, -1)">keyboard_double_arrow_up</b><b onclick="edit(this, 2)">keyboard_double_arrow_down</b><b onclick="edit(this, 'd')">done</b><b onclick="edit(this, 'e')">delete</b></span></article>`,
edit = (self, e, i = [...lc].indexOf(self.parentNode.parentNode)) =>(i+e>=0) ? q('.list').insertBefore(lc[i], lc[i+e]) : e=='e' ? 
lc[i].remove() : e=='d' ? lc[i].classList.contains('done') ? lc[i].classList.remove('done'):lc[i].classList.add('done'):null;
q('button').addEventListener("click", () => (q('#chore').value.trim().length && chore(q('#chore').value, q('#auth').value)), q('#chore').value = '',q('#auth').value = '');


chore('Jobba på projektet...', 'Daniel Westergren');
chore('Tvätta gympakläder - glö!', 'Nelly');
chore('Köpa lite godis.', 'Hugo');





