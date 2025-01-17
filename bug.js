```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("65311e77a86b420f3c90589a")}, {$inc: {field: '1'}});
```