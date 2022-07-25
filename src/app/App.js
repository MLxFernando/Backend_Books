import React, { Component } from 'react';



class App extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      dateOfPublication: '', 
      autor: '', 
      languageNative: '', 
      category: '',
      _id: '',
      books: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addBook(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/books/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.title,
          dateOfPublication: this.state.dateOfPublication, 
          autor: this.state.autor, 
          languageNative: this.state.languageNative, 
          category: this.state.category
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Book Updated'});
          this.setState({_id: '', title: '', dateOfPublication: '', autor: '', languageNative: '', category: ''});
          this.fetchBooks();
        });
    } else {
      fetch('/books/', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: 'Book Saved'});
          this.setState({title: '', dateOfPublication: '', autor: '', languageNative: '', category: ''});
          this.fetchBooks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteBook(id) {
    if(confirm('Are you sure you want to delete it?')) {
      fetch(`/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Book deleted'});
          this.fetchBooks();
        });
    }
  }

  editBook(id) {
    fetch(`/books/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          dateOfPublication: data.dateOfPublication, 
          autor: data.autor, 
          languageNative: data.languageNative, 
          category: data.category,
          _id: data._id
        });
      });
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    fetch('/books/')
      .then(res => res.json())
      .then(data => {
        this.setState({books: data});
        console.log(this.state.books);
      });
  }
  
  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Book Store
              </a>
            </div>
          </div>

        </nav>



        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addBook}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Title Book" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="dateOfPublication" onChange={this.handleChange} value={this.state.dateOfPublication} type="date" autoFocus/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="autor" onChange={this.handleChange} value={this.state.autor} cols="30" rows="10" placeholder="Book Autor" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="languageNative" onChange={this.handleChange} value={this.state.languageNative} cols="30" rows="10" placeholder="Book Language" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="category" onChange={this.handleChange} value={this.state.category} cols="30" rows="10" placeholder="Book Category" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">
                     SAVE
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>dateOfPublication</th>
                    <th>Autor</th>
                    <th>languageNative</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.books.map(book => {
                      return (
                        <tr key={book._id}>
                          <td>{book.title}</td>
                          <td>{book.dateOfPublication}</td>
                          <td>{book.autor}</td>
                          <td>{book.languageNative}</td>
                          <td>{book.category}</td>
                          <td>
                            <button onClick={() => this.deleteBook(book._id)} className="btn light-blue darken-4">
                              <i className="material-icons">DELETE</i> 
                            </button>
                            <button onClick={() => this.editBook(book._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">EDIT</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
