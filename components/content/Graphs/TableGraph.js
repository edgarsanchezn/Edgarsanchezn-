export default {template: `<div class="w-full p-3">
<!--Table Card-->
<div class="bg-gray-900 border border-gray-800 rounded shadow">
    <div class="border-b border-gray-800 p-3">
        <h5 class="font-bold uppercase text-gray-600">Table</h5>
    </div>
    <div class="p-5">
        <table class="w-full p-5 text-gray-700">
            <thead>
                <tr>
                    <th class="text-left text-gray-600">Name</th>
                    <th class="text-left text-gray-600">Side</th>
                    <th class="text-left text-gray-600">Role</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Obi Wan Kenobi</td>
                    <td>Light</td>
                    <td>Jedi</td>
                </tr>
                <tr>
                    <td>Greedo</td>
                    <td>South</td>
                    <td>Scumbag</td>
                </tr>
                <tr>
                    <td>Darth Vader</td>
                    <td>Dark</td>
                    <td>Sith</td>
                </tr>                                   
            </tbody>
        </table>

        <p class="py-2"><a href="#" class="text-white">See More issues...</a></p>

    </div>
</div>
<!--/table Card-->
</div>`}