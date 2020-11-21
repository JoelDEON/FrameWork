//
//  ContentView.swift
//  UP-DATE
//
//  Created by joel deon on 25.08.20.
//  Copyright © 2020 joel deon. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    @ObservedObject  var networkManager = NetworkManager()
    var body: some View {
        NavigationView{
            
            List(networkManager.posts) { post in
                NavigationLink(destination: DetailView(url: post.url)){
                    HStack {
                        Text(String(post.points))
                        Text(post.title)
                    }
                    
                }
                
            }
            .navigationBarTitle("UP-DATE")
        }
        .onAppear {
            self.networkManager.fetchData()
        }
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

//let posts = [ Post(id: "1", title: "HI!"),
//Post(id: "2", title: "Everyone"),
//Post(id: "3", title: "I am system")]
