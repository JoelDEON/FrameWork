//
//  PostData.swift
//  UP-DATE
//
//  Created by joel deon on 25.08.20.
//  Copyright © 2020 joel deon. All rights reserved.
//

import Foundation
struct Results: Decodable {
    let hits: [Post]
}
struct Post:Decodable, Identifiable  {
    var id: String{
        return objectID
    }
    let objectID: String
    let points: Int
    let title: String
    let url: String?
}
