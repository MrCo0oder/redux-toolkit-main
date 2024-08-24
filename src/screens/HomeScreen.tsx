import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Book from "../components/Book";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/counterReducer";
import { getBooks } from "../store/booksActions";

const HomeScreen = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  const { booksList } = useSelector((state: RootState) => state.getBooks);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBooks());
  },[]);

  type BookItem = {
    id: number;
    template_name: string;
    url: string;
    dimensions: string;
    thumbnail_image: string;
    author: string;
    color: string;
  };

  const renderItem: ListRenderItem<BookItem> = ({ item }) => (
    <Book
      author={item.author}
      coverURL={"https://www.picmaker.com"+item.thumbnail_image}
      nameOfBook={item.template_name}
      categoryColor={item.color}
      url={"https://www.picmaker.com"+item.url}
    />
  );

  return (
    <View style={styles.cont}>
      <FlatList 
        data={booksList}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
      {/* <Text  style={{color: '#000',}}>{count}</Text>
      <View style={{flexDirection: 'row',flex:1}}>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View>
      <View style={{flexDirection: 'row',flex:1}}>
        <Button title="+5" onPress={() => dispatch(incrementByAmount(5))} />
        <Button title="-5" onPress={() => dispatch(incrementByAmount(-5))} />
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
  },
});
