// eslint-disable-next-line import/prefer-default-export
export const listener = () => {
  document.getElementById('lis').classList.add('active');

  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.book').style.display = 'block';
  document.querySelector('.add').style.display = 'none';

  document.querySelector('#con').addEventListener('click', () => {
    document.getElementById('con').classList.add('active');
    document.getElementById('lis').classList.remove('active');
    document.getElementById('new').classList.remove('active');
    document.querySelector('.contact').style.display = 'block';
    document.querySelector('.book').style.display = 'none';
    document.querySelector('.add').style.display = 'none';
  });

  document.querySelector('#new').addEventListener('click', () => {
    document.getElementById('new').classList.add('active');
    document.getElementById('con').classList.remove('active');
    document.getElementById('lis').classList.remove('active');
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.book').style.display = 'none';
    document.querySelector('.add').style.display = 'block';
  });

  document.querySelector('#lis').addEventListener('click', () => {
    document.getElementById('lis').classList.add('active');
    document.getElementById('con').classList.remove('active');
    document.getElementById('new').classList.remove('active');
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.book').style.display = 'block';
    document.querySelector('.add').style.display = 'none';
  });

  document.querySelector('#logo').addEventListener('click', () => {
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.book').style.display = 'block';
    document.querySelector('.add').style.display = 'none';
  });
};
