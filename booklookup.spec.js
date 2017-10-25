function BookLookup(test) {
    this.test = test

    this.Search = (Tag) => {
        var Object = this.test(Tag)
        return {
            BookName : Object.title,
            Picture : Object.picture,
            Tag : Object.tagger
        }
    }
}
test('Book lookup', () => {
  var BookDes = {
        title : 'Harry Potter 7.1',
        picture : 'HarryPotter.jpg',
        tagger :  'test1234'
    }

  var getreturn ={
      BookName : 'Harry Potter 7.1',
      Picture : 'HarryPotter.jpg',
      Tag : 'test1234'
  }
  const AmazonService =  jest.fn('test1234').mockReturnValue(BookDes)

  let app = new BookLookup(AmazonService)
  let result = app.Search('test1234')

  expect(AmazonService).toHaveBeenCalled()
  expect(AmazonService).toHaveBeenCalledWith('test1234')

  expect(BookDes.title).toBe('Harry Potter 7.1')
  expect(result).toEqual(getreturn)
})
