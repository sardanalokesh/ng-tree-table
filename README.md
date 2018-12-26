# ng-tree-table
A tree table component for Angular.

![alt text](https://github.com/sardanalokesh/ng-tree-table/blob/master/src/assets/images/tree-table-ss.png) 

# usage
app.module.ts
```ts
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app.component.ts
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: string[] = ["Nodes", "Column 1", "Column 2", "Column 3"];
}
```

app.component.html
```html
<tree-table [columns]="columns">
  <tree-table-node>
    <ng-container class="node-columns">
      <td firstColumn>
        Node 1
      </td>
      <td>Some Value</td>
      <td>Some Value</td>
      <td>Some Value</td>
    </ng-container>
    <ng-container class="node-children">
      <tree-table-node>
        <ng-container class="node-columns">
          <td firstColumn>
            Node 2
          </td>
          <td>Some Value</td>
          <td>Some Value</td>
          <td>Some Value</td>
        </ng-container>
      </tree-table-node>
      <tree-table-node>
        <ng-container class="node-columns">
          <td firstColumn>
            Node 3
          </td>
          <td>Some Value</td>
          <td>Some Value</td>
          <td>Some Value</td>
        </ng-container>
        <ng-container class="node-children">
          <tree-table-node>
            <ng-container class="node-columns">
              <td firstColumn>
                Node 4
              </td>
              <td>Some Value</td>
              <td>Some Value</td>
              <td>Some Value</td>
            </ng-container>
          </tree-table-node>
        </ng-container>
      </tree-table-node>
    </ng-container>
  </tree-table-node>
</tree-table>
```
