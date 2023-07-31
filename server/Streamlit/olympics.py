import streamlit as st
import plotly.figure_factory as ff
import pandas as pd
import data
import medal_tally
import plotly.graph_objects as go
import plotly.express as px
import matplotlib.pyplot as plt
import seaborn as sns

hidden_menu = """
<style>
.appview-container, .css-1avcm0n {
background-color:#B2D3C2;
}

h1,h2,h3{
color:black;
}
a{
color:black
}

footer{
visibility:hidden
}
.css-zuelfj .css-c34i5s{
color:black;
border: 1px solid black;
}
.css-zuelfj{
color:black;
background-color:#c5c6d0;
}
.css-4sszyo{
border:1px solid black;

}

.st-c0{
color:black;
font-size:1.1rem;


}

.row-widget p{
color:black;
font-size:1.1rem;


}


#MainMenu{
visibility:hidden
}

.css-6qob1r{
background-color:#60d79e;
}
</style>

"""

st.markdown(hidden_menu,unsafe_allow_html=True)
df = pd.read_csv('./Streamlit/athlete_events.csv')
region_df = pd.read_csv('./Streamlit/noc_regions.csv')
df = data.pro(df,region_df)
option =  st.sidebar.radio('Select an Option',('Medal Tally','Country-wise analysis','Overall Analysis','Athlete analysis','Overall-Athlete analysis'))
# st.dataframe(df)
if option == 'Medal Tally':
    st.sidebar.header('Medal Tally')
    years,country = medal_tally.select_country_and_year(df)
    year = st.sidebar.selectbox('Select Year',years)
    coun = st.sidebar.selectbox('Select Country',country)
    medal_tally1 = medal_tally.sortedbycountry(df,year,coun)
    if year == 'Overall' and coun == 'Overall':
        st.title('Overall Analysis')
    if year != 'Overall' and coun == 'Overall':
        st.title('Analysis of the ' + str(year)+' Olympics')
    if year == 'Overall' and coun != 'Overall':
        st.title('Overall Analysis of ' +coun+' in Olympics')
    if year != 'Overall' and coun != 'Overall':
        st.title('Analysis of '+coun + ' in '+str(year)+' Olympics')
    st.table(medal_tally1)


if option == 'Overall Analysis':
    editions = df['Year'].unique().shape[0] - 1
    nations = df['Region'].unique().shape[0]
    players = df['Name'].unique().shape[0]
    sports = df['Sport'].unique().shape[0]
    events = df['Event'].unique().shape[0]
    host = df['City'].unique().shape[0]
    st.title("Some Stats")
    col1,col2,col3 = st.columns(3)
    with col1:
        st.header("Editions")
        st.title(editions)
    with col2:
        st.header("Nations")
        st.title(nations)
    with col3:
        st.header("Sports")
        st.title(sports)

    col1,col2,col3 = st.columns(3)
    with col1:
        st.header("Athletes")
        st.title(players)
    with col2:
        st.header("Events")
        st.title(events)
    with col3:
        st.header("Hosts")
        st.title(host)

    import plotly.graph_objects as go
    #
    # nationsall = medal_tally.countryover(df)
    #
    # fig = go.Figure(data=go.Scatter(x=nationsall['Countries Participating'], y=nationsall['Edition'], mode='lines'))
    #
    # fig.update_layout(title='Line Graph', xaxis_title='X-axis', yaxis_title='Y-axis')
    #
    # # fig.show()
    # st.plotly_chart(fig)





    nationsall = df.drop_duplicates(['Year', 'Region'])['Year'].value_counts().sort_values(ascending=True).reset_index()
    nationsall.columns = ['Edition', 'Countries Participating']

    fig = px.line(nationsall, y='Edition', x='Countries Participating', title='Participating countries over the years')

    st.title("Participating Countries")
    st.plotly_chart(fig)

    eventss = df.drop_duplicates(['Year', 'Event'])['Year'].value_counts().sort_values(ascending=True).reset_index()
    eventss.columns = ['Edition', 'Events']

    fig1 = px.line(eventss, y='Edition', x='Events', title='Overall Events')

    st.title("Events across Editions")
    st.plotly_chart(fig1)

    nationsall = df.drop_duplicates(['Year', 'Name'])['Year'].value_counts().sort_values(ascending=True).reset_index()
    nationsall.columns = ['Edition', 'Name']

    fig2 = px.line(nationsall, y='Edition', x='Name', title='Participation of Athelets')

    st.title("Athletes Over the year")
    st.plotly_chart(fig2)

    import seaborn as sns
    import matplotlib.pyplot as plt
    #
    # x = df.drop_duplicates(['Event', 'Year', 'Sport'])
    # plt.figure(figsize=(20, 20))
    # sns.heatmap(x.pivot_table(index='Sport', columns='Year', values='Event', aggfunc='count').fillna(0).astype('int'),
    #             annot=True)
    #
    # plt.title('Events in every Sport Over all Editions')
    # plt.xlabel('Year')
    # plt.ylabel('Sport')
    #
    # st.pyplot()
    # x = df.drop_duplicates(['Event', 'Year', 'Sport'])
    # plt.figure(figsize=(20, 20))
    # sns.heatmap(x.pivot_table(index='Sport', columns='Year', values='Event', aggfunc='count').fillna(0).astype('int'),
    #             annot=True)
    #
    # plt.title('Events in every Sport Over all Editions')
    # plt.xlabel('Year')
    # plt.ylabel('Sport')
    #
    # # Display the heatmap in Streamlit
    # fig, ax = plt.subplots()
    # ax = sns.heatmap(data=None, cbar=False, ax=ax)
    # ax.imshow(plt.gcf().get_axes()[0].get_images()[0].get_array(), aspect='auto', cmap='YlGnBu')
    # ax.axis('off')
    # st.pyplot(fig)

    x = df.drop_duplicates(['Event', 'Year', 'Sport'])
    heatmap_data = x.pivot_table(index='Sport', columns='Year', values='Event', aggfunc='count').fillna(0).astype(int)

    plt.figure(figsize=(20, 20))
    sns.heatmap(heatmap_data, annot=True, cmap='YlGnBu')

    plt.title('Events in every Sport Over all Editions')
    plt.xlabel('Year')
    plt.ylabel('Sport')
    st.set_option('deprecation.showPyplotGlobalUse', False)

    st.pyplot()

    st.title('Most Successful Athletes')
    sport_list = df['Sport'].unique().tolist()
    sport_list.sort()
    sport_list.insert(0,'Overall')
    selected_sport = st.selectbox('Select a sport',sport_list)
    x = medal_tally.most_successful(df,selected_sport)
    st.table(x)


if option == 'Country-wise analysis':
    st.sidebar.title("Medals Each Edition")
    country_list = df['Region'].unique().tolist()
    country_list.sort(key=str)
    selected_country = st.sidebar.selectbox('Select a Country',country_list)
    medals_c = medal_tally.year_wise_medal_tally(df,selected_country)
    st.title(selected_country+" medals over the years")
    fig = px.line(medals_c, x='Year', y='Medal')
    st.plotly_chart(fig)

    pt = medal_tally.generate_heatmap(df,selected_country)
    # if pt == None:
    if pt is None:
        st.title("Sorry, " + selected_country + " has not won any medals")


        # st.title("Sorry "+selected_country+" has not won medals")
    else:
        st.title(selected_country+" best Performing Sport")
        plt.figure(figsize=(20, 20))
        sns.heatmap(pt, annot=True, cmap='YlGnBu')
        st.set_option('deprecation.showPyplotGlobalUse', False)

        st.pyplot()

if option == 'Athlete analysis':
    country_list = df['Region'].unique().tolist()
    country_list.sort(key=str)
    selected_country = st.sidebar.selectbox('Select a Country', country_list)

    sport_list = df[df['Region'] == selected_country]['Sport'].unique()
    sport_list.sort()
    selected_game = st.sidebar.selectbox('Select sport',sport_list)

    athlete_list = df.loc[(df['Sport'] == selected_game) & (df['Region'] == selected_country), 'Name'].unique()
    athlete_list.sort()
    selected_athlete = st.sidebar.selectbox('Select Athlete',athlete_list)


    st.title("Stats of "+selected_athlete)
    col1,col2 = st.columns(2)
    with col1:
        st.header("Total Edition featured")
        total_editions = df[df['Name'] == selected_athlete]['Year'].nunique()
        st.title(str(total_editions))

    with col2:
        st.header("Total Medals Won")
        temp = df.dropna(subset=['Medal'])
        total_medals = temp[temp['Name'] == selected_athlete]['Medal'].count()
        st.title((total_medals))

    col1,col2,col3 =st.columns(3)

    with col1:
        st.header("Gold")

        gold_count = df[(df['Name'] == selected_athlete) & (df['Medal'] == 'Gold')]['Medal'].count()

        st.title(gold_count)

    with col2:
        st.header("Silver")

        gold_count = df[(df['Name'] == selected_athlete) & (df['Medal'] == 'Silver')]['Medal'].count()

        st.title(gold_count)

    with col3:
        st.header("Bronze")

        gold_count = df[(df['Name'] == selected_athlete) & (df['Medal'] == 'Bronze')]['Medal'].count()

        st.title(gold_count)


    temp = df[df['Name'] == selected_athlete]
    temp = temp.drop('Name', axis=1)
    temp = temp.drop('Height', axis=1)
    temp = temp.drop('Weight', axis=1)
    temp = temp.drop('ID', axis=1)
    temp = temp.drop('notes', axis=1)

    temp = temp.fillna(0)
    st.title("Editions Played and Various Events Played")
    st.table(temp)



if option == 'Overall-Athlete analysis':
    athlete_df = df.drop_duplicates(subset=['Name', 'Region'])
    x1 = athlete_df['Age'].dropna()
    x2 = athlete_df[athlete_df['Medal'] == 'Gold']['Age'].dropna()
    x3 = athlete_df[athlete_df['Medal'] == 'Silver']['Age'].dropna()
    x4 = athlete_df[athlete_df['Medal'] == 'Bronze']['Age'].dropna()
    fig = ff.create_distplot([x1, x2, x3, x4], ['Overall Age', 'Gold Medalist', 'Silver Medalist', 'Bronze Medalist'],show_hist=False, show_rug=False)
    fig.update_layout(autosize=False, width=900, height=600)

    st.title("Distribution of Medals with respect to Age")
    st.plotly_chart(fig)

    st.title("Men vs Women (Participation)")
    final = medal_tally.menvsw(df)
    fig = px.line(final, x="Year", y=["Male", "Female"])
    st.plotly_chart(fig)


    st.title("Height vs Weight")
    sport_list = df['Sport'].unique().tolist()
    sport_list.sort()
    sport_list.insert(0, 'Overall')
    selected_sport = st.selectbox('Select a sport', sport_list)
    tempdf = medal_tally.height_weight(df,selected_sport)

    fig= sns.scatterplot(x=tempdf['Height'],y=tempdf['Weight'],hue=tempdf['Medal'],style=tempdf['Sex'],s=30)
    st.pyplot(fig.figure)
