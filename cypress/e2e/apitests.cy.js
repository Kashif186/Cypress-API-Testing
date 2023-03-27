describe('API Tests', () => {
    it('GET - Retrieve All Users', () => {
      cy.request('GET', '/users')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(10)
          expect(response.body[0]).to.have.property('name', 'Leanne Graham')
        })
    })

    it('POST - Create a New Post', () => {
        const newPost = {
          title: 'New Post Title',
          body: 'New post body content',
          userId: 1
        }
    
        cy.request({
          method: 'POST',
          url: '/posts',
          body: newPost
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.title).to.eq(newPost.title)
          expect(response.body.body).to.eq(newPost.body)
          expect(response.body.userId).to.eq(newPost.userId)
        })
      })
    
      it('PUT - Update an Existing Post', () => {
        const updatedPost = {
          id: 1,
          title: 'Updated Post Title',
          body: 'Updated post body content',
          userId: 1
        }
    
        cy.request({
          method: 'PUT',
          url: '/posts/1',
          body: updatedPost
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.title).to.eq(updatedPost.title)
          expect(response.body.body).to.eq(updatedPost.body)
          expect(response.body.userId).to.eq(updatedPost.userId)
        })
      })
    
      it('DELETE - Delete an Existing Post', () => {
        cy.request({
          method: 'DELETE',
          url: '/posts/1'
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })

      it('GET - Retrieve All Comments for a Post', () => {
        cy.request('/posts/1/comments')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(5)
          })
      })
    
      it('GET - Retrieve a Specific Comment', () => {
        cy.request('/comments/1')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.email).to.eq('Eliseo@gardner.biz')
          })
      })
    
      it('GET - Retrieve All Albums for a User', () => {
        cy.request('/users/1/albums')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(10)
          })
      })
    
      it('GET - Retrieve a Specific Photo', () => {
        cy.request('/photos/1')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('accusamus beatae ad facilis cum similique qui sunt')
          })
      })
    
      it('POST - Create a New User', () => {
        const newUser = {
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@example.com',
          phone: '123-456-7890',
          website: 'johndoe.com'
        }
    
        cy.request({
          method: 'POST',
          url: '/users',
          body: newUser
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.name).to.eq(newUser.name)
          expect(response.body.username).to.eq(newUser.username)
          expect(response.body.email).to.eq(newUser.email)
          expect(response.body.phone).to.eq(newUser.phone)
          expect(response.body.website).to.eq(newUser.website)
        })
      })
    
      it('PUT - Update an Existing User', () => {
        const updatedUser = {
          id: 1,
          name: 'Jane Doe',
          username: 'janedoe',
          email: 'janedoe@example.com',
          phone: '123-456-7890',
          website: 'janedoe.com'
        }
    
        cy.request({
          method: 'PUT',
          url: '/users/1',
          body: updatedUser
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.name).to.eq(updatedUser.name)
          expect(response.body.username).to.eq(updatedUser.username)
          expect(response.body.email).to.eq(updatedUser.email)
          expect(response.body.phone).to.eq(updatedUser.phone)
          expect(response.body.website).to.eq(updatedUser.website)
        })
      })
    
      it('DELETE - Delete an Existing User', () => {
        cy.request({
          method: 'DELETE',
          url: '/users/1'
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    
      it('GET - Retrieve All Todos for a User', () => {
        cy.request('/users/1/todos')
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(20)
          })
      })

  })