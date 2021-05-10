const input = document.querySelector('input');
		const todobutton = document.querySelector('.addTodo ');

		todobutton.addEventListener('click', addList);
		

		function addList(){
			
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');

			const newLi = document.createElement('li');
			
			
			const doneBtn = document.createElement('button');
			const delBtn = document.createElement('button');
			

			doneBtn.innerHTML = 'Done';
			delBtn.innerHTML = 'Delete';


			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(doneBtn);
				newLi.appendChild(delBtn);
				localStorage.setItem('ele',JSON.stringify(input.value));
			}
			
			doneBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				doneBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
			
		}